class Pjvw.Ga
  @sendPageView = (pageName, fields) ->
    fields ||= {}
    a = ga('send', 'pageview', pageName, fields)
    console.log a
