Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    get 'find_like', to: "likes#find"
    get 'find_friend', to: "friend_requests#find"
    get 'get_users', to: "users#get_users"
    get 'posts/batch', to: "posts#batch"
    get 'posts/feed', to: "posts#feed"
    get 'comments/batch', to: "comments#batch"
    get 'search', to: "users#search"
    resources :users, only: [:create, :show, :update, :index]
    resources :friend_requests, only: [:index, :create, :update, :destroy]
    resources :posts, only: [:index, :show, :create, :update, :destroy]
    resources :comments, only: [:index, :create, :update, :destroy]
    resources :likes, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
  end
end
