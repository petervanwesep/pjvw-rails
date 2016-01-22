require "net/https"
require "uri"

module Pjvw
  class Mail
    attr_accessor :to, :from, :subject, :text

    def initialize(params={})
      @to      = params[:to]
      @from    = params[:from]
      @subject = params[:subject]
      @text    = params[:text]
    end

    def deliver!
      uri = URI.parse("https://api.mailgun.net/v2/email.pjvw.io/messages")
      data = { to: to, from: from, subject: subject, text: text }

      http = Net::HTTP.new(uri.host, uri.port)
      http.use_ssl = true

      request = Net::HTTP::Post.new(uri.request_uri)
      request.basic_auth("api", ENV['MAILGUN_API_KEY'])
      request.set_form_data(data)

      http.request(request)
    end
  end
end
