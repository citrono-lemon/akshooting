import 'phaser'
import './SpineContainer'

class Player {
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;

  public spineObject: ISpineContainer
  public player: Phaser.Physics.Arcade.Group

  public speed: number = 500

  constructor(scene: Phaser.Scene) {
    this.spineObject = scene.add.spineContainer(200, 300, "player", "Walk", true)
    this.spineObject.spine.setScale(0.5, 0.5)
      .setMix("Idle2", "Jump", 0.1)
      .setMix("Idle2", "Walk", 0.1)
      .setMix("Walk", "Jump", 0.1)
      .setMix("Jump", "Idle2", 0.1)
    const body = this.spineObject.body as Phaser.Physics.Arcade.Body
    this.spineObject.setPhysicsSize(body.width * 0.8, body.height * 0.8)
    this.player = scene.physics.add.group(this.spineObject)
    //sprite.preFX?.addWipe(10, 1, 0);
    //this.spineObject.postFX?.addPixelate(16)
    //scene.cameras.main.postFX.addWipe();
  }


  update() {
    this.handleInput();
  }


  move(p: Phaser.Math.Vector2) {
    const offsetY = (this.spineObject.body as Phaser.Physics.Arcade.Body).height / 2
    const dx = p.x - this.spineObject.x
    const dy = (p.y + offsetY) - this.spineObject.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance > 10) { // ポインターとの距離が一定以上の場合のみ移動
      const directionX = dx / distance
      const directionY = dy / distance

      if (distance < 100) { // ポインターとの距離が近い場合は速度を調整
        const adjustedSpeed = this.speed * (distance / 100)
        this.player.setVelocityX(directionX * adjustedSpeed)
        this.player.setVelocityY(directionY * adjustedSpeed)
      } else {
        this.player.setVelocityX(directionX * this.speed)
        this.player.setVelocityY(directionY * this.speed)
      }
    } else {
      this.player.setVelocityX(0)
      this.player.setVelocityY(0)
    }
  }

  stop() {
    const velocity = this.spineObject.body?.velocity;
    if (velocity) {
      velocity.x *= 0.5;
      velocity.y *= 0.5;
    }
  }


  private handleInput() {
    /*
    const speed = 200;

    if (this.cursors?.left?.isDown) {
      this.body?.velocity?.x = -speed;
    } else if (this.cursors.right?.isDown) {
      this.body.velocity.x = speed;
    } else {
      this.body.velocity.x = 0;
    }

    if (this.cursors?.up?.isDown) {
      this.body.velocity.y = -speed;
    } else if (this.cursors.down?.isDown) {
      this.body.velocity.y = speed;
    } else {
      this.body.velocity.y = 0;
    }
    */
  }
}


export default Player
