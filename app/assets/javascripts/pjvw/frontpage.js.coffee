typewriter = require('typewriter')

window.onbeforeunload = ->
  window.scrollTo 0, 0

document.addEventListener 'DOMContentLoaded', ->
  logo = document.querySelector('.logo')
  role = ['Engineering Leader']
  tw = typewriter(document.querySelector('.logo')).withAccuracy(100).withMinimumSpeed(15).withMaximumSpeed(18).build()
  tw.wait(1500)
    .type('Pete van Wesep', ->
      document.querySelector('.navbar').classList.add('active')
      document.querySelector('.content').classList.add('active')
    )
