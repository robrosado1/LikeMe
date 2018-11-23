Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  namespace :api, defaults: { format: :json} do
    resources :users, only: [:create, :show, :index, :update]
    resources :posts, only: [:create, :show, :index, :update, :destroy] do
      resources :comments, only: [:create]
    end
    resources :comments, only: [:index, :show, :update, :destroy]
    resources :friendships, only: [:create, :update, :destroy]
    resource :session, only: [:create, :destroy]
  end
end
