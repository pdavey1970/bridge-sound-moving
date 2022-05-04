input.onSound(DetectedSound.Loud, function () {
    sb.setServoPosition(sb.servo(SBServo.ServoA), 0)
    basic.pause(2000)
    sb.setServoPosition(sb.servo(SBServo.ServoA), 56)
})
input.setSoundThreshold(SoundThreshold.Loud, 128)
