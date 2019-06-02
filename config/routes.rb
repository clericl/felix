Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    get 'find_friend', to: "friend_requests#find"
    get 'get_users', to: "users#get_users"
    resources :users, only: [:create, :show, :index]
    resources :friend_requests, only: [:index, :create, :update, :destroy] do
    end
    resource :session, only: [:create, :destroy]
  end
end
