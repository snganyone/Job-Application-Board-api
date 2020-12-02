Rails.application.routes.draw do
  resources :agencies
  resources :jobs
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/jobs' => 'jobs#index'
  get '/agencies' => 'agencies#index'
end
