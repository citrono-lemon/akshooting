import { GameObjects, Physics, Tweens } from "phaser"

import EnemyBase from "./enemyBase";
interface EnemyStatus {
  hp: number
}

class EnemyZDron extends EnemyBase {
  public sprite: GameObjects.Sprite
  //public enemy: Phaser.Physics.Arcade.Group
  public state: EnemyStatus

  public speed: number = 500

  constructor(scene: Phaser.Scene, path: Phaser.Types.Tweens.TweenBuilderConfig | Phaser.Types.Tweens.TweenChainBuilderConfig | null) {
    super(scene, path)
    this.sprite = scene.add.sprite(640, 300, "enemy")
    this.sprite.setScale(0.2)
    this.state = { hp: 0 }

    const body = this.sprite.body as Physics.Arcade.Body
    scene.physics.add.group(this.sprite)

    if (path != null) {
      if (path.targets == null) {
        path.targets = this.sprite
      }
      scene.tweens.chain(path)
    }

    //this.sprite.postFX.addBloom(0xffffff, 1, 1, 1, 1, 4)
  }
}


export default EnemyZDron