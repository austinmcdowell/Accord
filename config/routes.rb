Rails.application.routes.draw do
  resources :messages
  devise_for :users
  resources :rooms
  root 'home#index'
  get 'dashboard/index'
  get 'home/index'
  
end
