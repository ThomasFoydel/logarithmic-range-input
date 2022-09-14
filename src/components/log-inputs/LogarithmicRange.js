import React, { useState } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import Log from './log'

const LogarithmicRange = ({
    defaultHigh = 50,
    defaultLow = 0,
    minpos = 0,
    maxpos = 100,
    minval = 5,
    maxval = 1600,
    onChange
}) => {
    const [high, setHigh] = useState(defaultHigh)
    const [low, setLow] = useState(defaultLow)

    const log = new Log({
        minval,
        maxval,
        minpos,
        maxpos
    })

    const calcPos = (pos) => {
        if (pos === 0) return 0
        const val = log.value(pos)
        if (val > 1000) return Math.round(val / 100) * 100
        if (val > 500) return Math.round(val / 10) * 10
        return Math.round(val)
    }

    const handleChange = ([low, high]) => {
        setLow(low)
        setHigh(high)
        if (!onChange) {
            return console.log('please pass onChange method to LogarithmicRange')
        }
        const newVals = {
            low,
            high,
            logLow: calcPos(low),
            logHigh: calcPos(high)
        }
        onChange(newVals)
    }

    return <Slider 
        range 
        value={[low, high]} 
        maxValue={maxpos} 
        minValue={minpos} 
        onChange={handleChange}
        allowCross={false}
    />
}

export default LogarithmicRange