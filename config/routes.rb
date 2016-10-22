Rails.application.routes.draw do
  root 'welcome#index'
  resources "contact_forms", only: [:create]
  get "zork" => 'python#zork'
  resource "stranger_things", only: [:create, :show]
end
