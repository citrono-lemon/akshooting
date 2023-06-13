import Enemy from "./enemy"



export default class EnemyManager {
  constructor(scene: Phaser.Scene) {
    this.instantiate(scene)
  }

  instantiate(scene: Phaser.Scene) {

    let timeline = scene.add.timeline([
      {
        at: 0,
        run: () => new Enemy(scene, { targets: null, x: 0, y: "-=100", duration: 1000 })
      }, {
        at: 0,
        run: () => new Enemy(scene, { targets: null, x: 0, y: "-=0", duration: 1000 })
      }, {
        at: 0,
        run: () => new Enemy(scene, { targets: null, x: 0, y: "+=100", duration: 1000 })
      }, {
        at: 200,
        run: () => new Enemy(scene, { targets: null, x: 0, y: "-=100", duration: 1000 })
      }, {
        at: 200,
        run: () => new Enemy(scene, { targets: null, x: 0, y: "-=0", duration: 1000 })
      }, {
        at: 200,
        run: () => new Enemy(scene, { targets: null, x: 0, y: "+=100", duration: 1000 })
      }
    ])

    timeline.play()
  }
}