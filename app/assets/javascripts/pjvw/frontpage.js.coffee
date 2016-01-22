typewriter = require('typewriter')

window.onbeforeunload = ->
  window.scrollTo 0, 0

document.addEventListener 'DOMContentLoaded', ->
  logo = document.querySelector('.logo')
  role = ['Backend', 'Frontend', 'Full Stack']
  tw = typewriter(document.querySelector('.logo')).withAccuracy(100).withMinimumSpeed(15).withMaximumSpeed(18).build()

  tw.wait(0)
    .type('Peter van Wesep', ->
      document.querySelector('.navbar').classList.add 'active'
    )
    .wait(800)
    .type(", #{role[0]}")
    .wait(300)
    .deleteNChars(role[0].length)
    .type(role[1])
    .wait(200)
    .deleteNChars(role[1].length)
    .wait(850)
    .type(role[2])
    .type(" Engineer", ->
      document.querySelector('body').classList.add('active')
      document.querySelector('.content').classList.add('active')
      document.querySelector('.footer').classList.add('active')
    )
