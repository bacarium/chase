def on_button_pressed_a():
    while True:
        if ball.get(LedSpriteProperty.X) != target.get(LedSpriteProperty.X):
            if ball.get(LedSpriteProperty.X) < target.get(LedSpriteProperty.X):
                ball.change(LedSpriteProperty.X, 1)
            else:
                ball.change(LedSpriteProperty.X, -1)
        if ball.get(LedSpriteProperty.Y) != target.get(LedSpriteProperty.Y):
            if ball.get(LedSpriteProperty.Y) < target.get(LedSpriteProperty.Y):
                ball.change(LedSpriteProperty.Y, 1)
            else:
                ball.change(LedSpriteProperty.Y, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

ball: game.LedSprite = None
target: game.LedSprite = None
target = game.create_sprite(randint(0, 4), randint(0, 4))
ball = game.create_sprite(randint(0, 4), randint(0, 4))
target.set(LedSpriteProperty.BRIGHTNESS, 128)