controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Direction == 1) {
        animation.runImageAnimation(
        Milo,
        [img`
            .......f............
            ......ff............
            ....fffff...........
            ....f5ffff..........
            ....ffffff.....ff...
            ...f1ffff......fff..
            ....111133......fff.
            .....333ff.......ff.
            ......111ff......ff.
            ....11111fff.....ff.
            ...1111111fff...fff.
            ..11.111111fff.fff..
            ..1.11.11111fffff...
            ...11...111111fff...
            ...1.....1111ffff...
            ..........11ffff1...
            ..........11fff11...
            ..........1111111...
            .........111.111....
            ........111.111.....
            `,img`
            ..............fff...
            .............ff.ff..
            .............ff.....
            ............ff......
            ....f.......ff.11.11
            ...ff.......ff.11.11
            .fffff......ff11.11.
            .f5ffff......ff1.11.
            .ffffff......ff1.11.
            f1ffff....ffffff11..
            .111133ffffffff111..
            ..333ffffffff1ff1...
            ..111f11111111111...
            ..111111111111111...
            ...1111111111111....
            ..11111111111.......
            ..11111111..........
            ..11.11.............
            .11.11..............
            .11.11..............
            `,img`
            ....................
            ....................
            ....................
            ....................
            ....f..........ff...
            ...ff.........ffff..
            .fffff........f.ff..
            .f5ffff.........ff..
            .ffffff........ff...
            f1ffff.........ff...
            .111133ffffffffff...
            ..333fffffffffff....
            ...111fffffff1ff....
            ..11111111111111....
            ..11111111111111....
            ..11111111111111....
            ..11111111111111....
            .11..11...11..11....
            .11..11...11..11....
            11..11...11..11.....
            `],
        250,
        false
        )
    } else {
        animation.runImageAnimation(
        Milo,
        [img`
            ............f.......
            ............ff......
            ...........fffff....
            ..........ffff5f....
            ...ff.....ffffff....
            ..fff......ffff1f...
            .fff......331111....
            .ff.......ff333.....
            .ff......ff111......
            .ff.....fff11111....
            .fff...fff1111111...
            ..fff.fff111111.11..
            ...fffff11111.11.1..
            ...fff111111...11...
            ...ffff1111.....1...
            ...1ffff11..........
            ...11fff11..........
            ...1111111..........
            ....111.111.........
            .....111.111........
            `,img`
            ...fff..............
            ..ff.ff.............
            .....ff.............
            ......ff............
            11.11.ff.......f....
            11.11.ff.......ff...
            .11.11ff......fffff.
            .11.1ff......ffff5f.
            .11.1ff......ffffff.
            ..11ffffff....ffff1f
            ..111ffffffff331111.
            ...1ff1ffffffff333..
            ...11111111111f111..
            ...111111111111111..
            ....1111111111111...
            .......11111111111..
            ..........11111111..
            .............11.11..
            ..............11.11.
            ..............11.11.
            `,img`
            ....................
            ....................
            ....................
            ....................
            ...ff..........f....
            ..ffff.........ff...
            ..ff.f........fffff.
            ..ff.........ffff5f.
            ...ff........ffffff.
            ...ff.........ffff1f
            ...ffffffffff331111.
            ....fffffffffff333..
            ....ff1fffffff111...
            ....11111111111111..
            ....11111111111111..
            ....11111111111111..
            ....11111111111111..
            ....11..11...11..11.
            ....11..11...11..11.
            .....11..11...11..11
            `],
        250,
        false
        )
    }
    Milo.y = 79
    Milo.vy = -200
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Milo,
    [img`
        ....................
        ....................
        ....................
        ....................
        ......f........ff...
        .....ff.......ffff..
        ...fffff......f..f..
        ...f5ffff.......ff..
        ...ffffff.......ff..
        ..f1ffff........ff..
        ...111133.......ff..
        ....333ffffffffff...
        .....1111ffffffff...
        ....11111ffffff1ff..
        ....11111111111111..
        ....11111111111111..
        ....11111111111111..
        ....11.11...11.11...
        ...11...11.11...11..
        ..11...11.11...11...
        `,img`
        ....................
        ....................
        ....................
        ....................
        .....f..............
        ....ff........ff....
        ..fffff......ffff...
        ..f5ffff.....f..f...
        ..ffffff.......ff...
        .f1ffff........ff...
        ..111133.......ff...
        ...333ffffffffff....
        ....1111ffffffff....
        ...11111ffffff1ff...
        ...11111111111111...
        ...11111111111111...
        ...11111111111111...
        ...1111.....1111....
        ...11.11...11.11....
        ..11.11...11.11.....
        `],
    250,
    true
    )
    controller.moveSprite(Milo, 20, 0)
    Direction = 1
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Milo)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Milo)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Milo,
    [img`
        ....................
        ....................
        ....................
        ....................
        ...ff........f......
        ..ffff.......ff.....
        ..f..f......fffff...
        ..ff.......ffff5f...
        ..ff.......ffffff...
        ..ff........ffff1f..
        ..ff.......331111...
        ...ffffffffff333....
        ...ffffffff1111.....
        ..ff1ffffff11111....
        ..11111111111111....
        ..11111111111111....
        ..11111111111111....
        ...11.11...11.11....
        ..11...11.11...11...
        ...11...11.11...11..
        `,img`
        ....................
        ....................
        ....................
        ....................
        .............f......
        ...ff........ff.....
        ..ffff......fffff...
        ..f..f.....ffff5f...
        ..ff.......ffffff...
        ..ff........ffff1f..
        ..ff.......331111...
        ...ffffffffff333....
        ...ffffffff1111.....
        ..ff1ffffff11111....
        ..11111111111111....
        ..11111111111111....
        ..11111111111111....
        ...1111.....1111....
        ...11.11...11.11....
        ....11.11...11.11...
        `],
    250,
    true
    )
    controller.moveSprite(Milo, 20, 0)
    Direction = 0
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Milo.setImage(img`
        ....................
        ....................
        ....................
        ....................
        .......f.....f......
        .......ff...ff......
        .......fffffff......
        .......f5f1f5f......
        ......ffff1ffff.....
        .......f11f11f......
        ........11111.......
        ....ff...333........
        ...fff..f111f.......
        ...ff...f111f.......
        ...ff..f11111f......
        ...ff..f11111f......
        ...fff.f11111f......
        ....fff1111111f.....
        ....fff111111ff.....
        .....fff11111ff.....
        `)
})
let Direction = 0
let Milo: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
Milo = sprites.create(img`
    ....................
    ....................
    ....................
    ....................
    .......f.....f......
    .......ff...ff......
    .......fffffff......
    .......f5f1f5f......
    ......ffff1ffff.....
    .......f11f11f......
    ........11111.......
    ....ff...333........
    ...fff..f111f.......
    ...ff...f111f.......
    ...ff..f11111f......
    ...ff..f11111f......
    ...fff.f11111f......
    ....fff1111111f.....
    ....fff111111ff.....
    .....fff11111ff.....
    `, SpriteKind.Player)
Milo.setStayInScreen(true)
Milo.setPosition(10, 100)
info.setScore(0)
game.onUpdate(function () {
    if (Milo.y < 80) {
        Milo.ay += 200
    } else {
        Milo.vy = 0
        Milo.ay = 0
    }
})
