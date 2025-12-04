basic.forever(function () {
    if (input.lightLevel() > 200) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.UntilDone)
    } else if (input.lightLevel() < 50) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funeral), music.PlaybackMode.UntilDone)
    }
})
