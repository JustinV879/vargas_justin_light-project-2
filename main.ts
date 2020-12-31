while (true) {
    console.log("Light Level:" + input.lightLevel())
    if (input.lightLevel() > 9) {
        light.clear()
    } else {
        light.setAll(light.rgb(255, 255, 255))
    }
    
}
