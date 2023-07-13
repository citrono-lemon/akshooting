import Enemy from "./enemy"
import TweenUtil from "./tweenUtil"



export default class EnemyManager {
  constructor(scene: Phaser.Scene) {
    this.instantiate(scene)
  }

  instantiate(scene: Phaser.Scene) {


    let timeline = scene.add.timeline([
      {
        at: 0,
        run: () => new Enemy(scene, TweenUtil.UpToDownArc(scene, 400))
      },
      {
        at: 500,
        run: () => new Enemy(scene, TweenUtil.UpToDownArc(scene, 400))
      },
      {
        at: 1000,
        run: () => new Enemy(scene, TweenUtil.UpToDownArc(scene, 400))
      },

    ])

    timeline.add({
      at: 250,
      run: () => new Enemy(scene, TweenUtil.UpToDownArc(scene, 400))
    })
    //timeline.play()
  }
}