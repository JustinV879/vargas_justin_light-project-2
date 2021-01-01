while (true) {
    console.log("Light Level:" + input.lightLevel())
    if (input.lightLevel() >= 6) {
        light.clear()
    } else {
        light.setAll(light.rgb(255, 255, 255))
        light.setBrightness(10)
    }
    
}
