import { GameObjects, Physics, Tweens } from "phaser"

interface EnemyStatus {
  hp: number
}

abstract class EnemyBase {
  public sprite: GameObjects.Sprite
  //public enemy: Phaser.Physics.Arcade.Group
  public state: EnemyStatus

  public speed: number = 500

  constructor(scene: Phaser.Scene, path: Phaser.Types.Tweens.TweenBuilderConfig | Phaser.Types.Tweens.TweenChainBuilderConfig | null) {
    this.sprite = scene.add.sprite(640, 300, "star")
    this.sprite.setScale(0.5)
    this.state = { hp: 0 }

    const body = this.sprite.body as Physics.Arcade.Body

    if (path != null) {
      if (path.targets == null) {
        path.targets = this.sprite
      }
      scene.tweens.chain(path)
    }

    //this.sprite.postFX.addBloom(0xffffff, 1, 1, 1, 1, 4)
  }

  instantiate() {
    //this.sprite.timelin
  }

  disappear(score: number) {

  }


}

export default EnemyBase