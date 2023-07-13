

export default class TweenUtil {
  /**
   * 上から下に流れるTweening（くの字）
   * @param scene 
   * @param x 膨らみ
   * @returns t
   */
  static UpToDownArc(scene: Phaser.Scene, x: number) {
    let t = {
      targets: null,
      tweens: [
        {
          ease: Phaser.Math.Easing.Linear,
          duration: 0,
          x: x,
          y: -50,
        },
        {
          ease: Phaser.Math.Easing.Sine.In,
          duration: 2000,
          x: x - 60,
          y: scene.cameras.main.height / 2,
        },
        {
          ease: Phaser.Math.Easing.Sine.Out,
          duration: 2000,
          x: x,
          y: scene.cameras.main.height + 50,
        },
      ],
    }
    return t
  }


  /**
   * 上から下に流れるTweening（一回転）
   * @param scene 
   * @param x 膨らみ
   * @returns t
   */
  static UpToDownRound(scene: Phaser.Scene, x: number) {
    let t = {
      targets: null,
      tweens: [
        {
          ease: Phaser.Math.Easing.Linear,
          duration: 0,
          x: x,
          y: -50,
        },
        {
          ease: Phaser.Math.Easing.Sine.In,
          duration: 2000,
          x: x - 60,
          y: scene.cameras.main.height / 2,
        },
        {
          ease: Phaser.Math.Easing.Sine.Out,
          duration: 2000,
          x: x,
          y: scene.cameras.main.height + 50,
        },
      ],
    }
    return t
  }

}