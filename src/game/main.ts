import 'phaser'
import './SpineContainer'
import Player from './player'
import EnemyManager from './enemy/enemyManager'

/**
 * メインシーン
 * 一応説明しておくと、
 * init⇒preload⇒create⇒update⇒update⇒...
 * のようなライフサイクルで動作する
 */
class MainScene extends Phaser.Scene {
  pointer: Phaser.Math.Vector2 = new Phaser.Math.Vector2(0, 0)
  private player: Player | undefined

  constructor() {
    super({
      key: 'Main',
    })
  }

  /**
   * 初期処理
   */
  init(): void {
    console.log("init")
  }

  /**
   * アセットデータ読込などを行う処理
   */
  preload(): void {
    console.log("preload")
    // public/assets へパスを設定する
    this.load.setPath("assets")
    this.load.image("pp", "sd_player.png")
    this.load.image("star", "star.png")
    this.load.spine("player", "sd_player.json", ["sd_player.atlas"], true)
  }

  /**
   * ゲーム画面の作成処理やイベントアクションを記述する処理
   */
  create(): void {
    console.log("create")

    this.player = new Player(this)
    new EnemyManager(this)



    /*
    const [W, H] = [this.cameras.main.width, this.cameras.main.height]

    // プレイヤーとブロックの衝突を追加
    this.physics.add.collider(wall, player, undefined, undefined, this)

    // プレイヤーと床の衝突を追加

    this.physics.add.collider(platform, player, (plfm, plyr) => {
      if (spineObject.spine.state.getCurrent(0).animation.name == "Jump") {
        spineObject.spine.state.setAnimation(0, "Idle2", true)
        //(plyr as Phaser.Types.Physics.Arcade.GameObjectWithBody).body
        const body = (plyr as Phaser.Types.Physics.Arcade.GameObjectWithBody).body as Phaser.Physics.Arcade.Body
        body.setVelocityX(0)
      }
    }, undefined, this)
    */

    this.input.on("pointerdown", (p: Phaser.Input.Pointer) => {
      this.pointer.x = p.position.x
      this.pointer.y = p.position.y
    }).on("pointermove", (p: Phaser.Input.Pointer) => {
      if (p.isDown) {
        this.pointer.x = p.position.x
        this.pointer.y = p.position.y
      }
    })
  }

  /**
   * メインループ
   */
  update(): void {
    if (this.input.activePointer.isDown) {
      this.player?.move(this.pointer)
    }
    else {
      this.player?.stop()
    }

    this.player?.update()
  }
}

export default MainScene