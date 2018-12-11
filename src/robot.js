const shortid = require('shortid')

class Robot {
    constructor (isItShiny, robotDescription = null, robotNetwork = []) {
        console.log('Yo, I am being created.')
        this._id = shortid.generate()
        this.isShiny = isItShiny
        // this.hasHeight = robotHeight
        // this.visionType = robotVision
        // this.armType = robotArms
        // this.movementType = robotMovement
        this._description = robotDescription
        this._network = robotNetwork
    }

    meet (otherRobot) {
        if(!(otherRobot instanceof Robot))
            throw new Error(`${otherRobot} is not a robot.`)

        this._network.push(otherRobot.id)
        otherRobot._network.push(this.id)
        return this
    }

    get id () {
        return this._id
    }

    set id (val) {
        throw new Error('You cannot do that.')
    }

    get description () {
        return this._description
    }

    set description (newDescription) {
        if(newDescription === "")
            throw new Error('Please include a robust description.')
        this._description = newDescription
    }

    get network () {
        return this._network
    }

    set network (val) {
        throw new Error('You cannot do that.')
    }
}

console.log(new Robot(false, 3, 'red/blue', 'claws', 'wheels'))

module.exports = Robot;