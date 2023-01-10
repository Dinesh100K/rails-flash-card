# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions',
    omniauth_callbacks: 'users/omniauth_callbacks'
  }

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth', skip: [:omniauth_callbacks] # add this and override the omniauth callbacks
      post 'social_auth/callback', to: 'social_auth_controller#authenticate_social_auth_user' # this is the line where we add our routes
    end
  end
  
  root 'pages#index'

  get '*path', to: 'pages#index', via: :all
end
