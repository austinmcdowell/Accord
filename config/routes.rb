Rails.application.routes.draw do
  root 'dashboard#index'

  resources :messages
  resources :spec, only: [:index]
  
  devise_for :users

  #get '/{:value}' => '/{component}/{component}'

  # resources :rooms, only: [:]
end
