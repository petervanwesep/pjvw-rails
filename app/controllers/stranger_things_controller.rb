require_relative '../../lib/pjvw/yahoo'

class StrangerThingsController < ApiController
  def show
    render text: Yahoo.new(username: ENV['YAHOO_USERNAME'], password: ENV['YAHOO_PASSWORD']).most_recent_message
  end
end