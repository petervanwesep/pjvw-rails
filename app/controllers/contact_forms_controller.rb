class ContactFormsController < ApplicationController
  def create
    Pjvw::Mail.new(
      to: 'petervanwesep@gmail.com',
      from: params[:contact_form]['email'],
      subject: "It's #{params[:contact_form]['name']} saying heyyy",
      text: params[:contact_form]['message']
    ).deliver!

    render(json: {message: 'message delivered'})
  end
end
