Rails.application.routes.draw do
  resources :messages
  devise_for :users
  # resources :rooms, only: [:]
  root 'dashboard#index'
  get 'spec/index'
end
