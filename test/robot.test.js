const { expect } = require('chai')
const Robot = require('../src/robot')

describe('Robot', function () {
  describe('new Robot()', function () {
    it('should randomly generate a unique id upon creation', function ()  {
      const robotA = new Robot()
      const robotB = new Robot()

      expect(robotA.id).to.not.equal(robotB.id)
    })
    it('should allow for a description property to be set in the constructor', function () {
      const robotA = new Robot(false, "description")

      expect(robotA.description).to.equal("description")
    })
    it('if the description is not set, it should be null', function () {
      const robotA = new Robot()

      expect(robotA.description).to.equal(null)
    })
  })

  describe('get id', function () {
    it('should return the id of the robot', function () {
      const robot = new Robot ()

      expect(robot.id).to.be.ok
    })
  })

  describe('set id', function () {
    it('should throw an error if an attempt is made to change the id', function () {
      const robot = new Robot ()

      const actual = () => robot.id = 1

      expect(actual).to.throw()
    })
  })

  describe('get description', function () {
    it('should return the description', function () {
      const robot = new Robot (false, "This is a description.")

      expect(robot.description).to.be.ok
    })
  })

  describe('set description', function () {
    it('should throw an error if the value is empty', function () {
      const robot = new Robot ()

      const actual = () => robot.description = ""

      expect(actual).to.throw()
    })
    it('should set the description of the robot', function () {
      const robot = new Robot ()

      const actual = () => robot.description = "This is a description."

      expect(actual).to.not.throw()
      expect(robot.description).to.equal("This is a description.")
    })
  })

  describe('get network', function () {
    it('should return an array of all the ids the robot has met', function () {
      const robot = new Robot (false, "This is a description.", ['rob'])

      expect(robot.network).to.be.ok
    })
  })

  describe('set network', function () {
    it('should throw an error if an attempt is made to change the network', function () {
      const robot = new Robot (false, "This is a description.", ['rob'])

      const actual = () => robot.network = ['bob']

      expect(actual).to.throw()
    })
  })

  describe('#meet()', function () {
    it('should have a meet function that takes another instance of a robot', function () {
      const robot = new Robot ()

      expect(robot.meet).to.be.ok
    })
    it('should throw an error if the inserted value is not a robot instance', function () {
      const robot = new Robot ()

      const actual = () => robot.meet({name: 'robot'})

      expect(actual).to.throw()
    })
    it('should add the robots ids to each other\'s networks', function () {
      const robotA = new Robot ()
      const robotB = new Robot ()
      const robotC = new Robot ()

      const updateIds = () => {
        robotA._id = 1
        robotB._id = 2
        robotC._id = 3
      }

      expect(updateIds).to.not.throw()

      const actual = () => {
        robotA.meet(robotB)
        robotA.meet(robotC)
      }

      expect(actual).to.not.throw()
      expect(robotA.network).to.deep.equal([2, 3])
      expect(robotB.network).to.deep.equal([1])
      expect(robotC.network).to.deep.equal([1])
    })
  })
})
