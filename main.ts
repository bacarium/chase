input.onButtonPressed(Button.A, function () {
    while (true) {
        if (missile.get(LedSpriteProperty.X) != target.get(LedSpriteProperty.X)) {
            if (missile.get(LedSpriteProperty.X) < target.get(LedSpriteProperty.X)) {
                missile.change(LedSpriteProperty.X, 1)
            } else {
                missile.change(LedSpriteProperty.X, -1)
            }
        }
        if (missile.get(LedSpriteProperty.Y) != target.get(LedSpriteProperty.Y)) {
            if (missile.get(LedSpriteProperty.Y) < target.get(LedSpriteProperty.Y)) {
                missile.change(LedSpriteProperty.Y, 1)
            } else {
                missile.change(LedSpriteProperty.Y, -1)
            }
        }
    }
})
let missile: game.LedSprite = null
let target: game.LedSprite = null
target = game.createSprite(randint(0, 4), randint(0, 4))
missile = game.createSprite(randint(0, 4), randint(0, 4))
target.set(LedSpriteProperty.Brightness, 128)
