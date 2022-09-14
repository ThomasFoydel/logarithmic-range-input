import React, { useState } from 'react'
import Log from './log'

const LogarithmicSlider = ({
    defaultValue = 0,
    minpos = 0,
    maxpos = 100,
    minval = 5,
    maxval = 1600,
    onChange
}) => {
    const [value, setValue] = useState(defaultValue)

    const log = new Log({
        minpos,
        maxpos,
        minval,
        maxval
    })

    const calcPos = (pos) => {
        if (pos === 0) return 0
        const val = log.value(pos)
        if (val > 1000) return Math.round(val / 100) * 100
        if (val > 500) return Math.round(val / 10) * 10
        return Math.round(val)
    }

    const handleChange = (e) => {
        const newVal = e.target.value
        setValue(newVal)
        if (!onChange) {
            return console.log("please pass an onChange method to LogarithmicSlider")
        }
        const newValAndPos = {
            value: newVal,
            position: calcPos(newVal)
        }
        onChange(newValAndPos)
    }

    return <input type="range" value={value} onChange={handleChange} />
}

export default LogarithmicSlider