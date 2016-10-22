class Yahoo
  def initialize(username:, password:)
    @username = username
    @password = password
  end

  def most_recent_message
    attachments = account.last.attachments
    if attachments.present?
      attachments.last.body.to_s
    end
  end

  private

  def account
    Mail.defaults do
      retriever_method :pop3,
        address: "pop.mail.yahoo.com",
        port: 995,
        user_name: 'strangerthings666@yahoo.com',
        password: 'LtUrD2ViQDWc9L',
        enable_ssl: true
    end
  end
end
