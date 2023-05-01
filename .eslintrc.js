{
    "extends" ["airbnb/base"],

    "rules"; {
        "linebreak-style"; 0,
        "eslint linebreak-style" [0, "error", "windows"],
        "allowForLoopAfterthoughts"; true
      }

    "globals"; {
        "process"; true,
        "window"; true,
        "console"; true,
        "document"; true,
        "setInterval"; true,
        "setTimeout"; true
      }
}

