Rails.application.routes.draw do
  resources :agencies do
    resources :jobs
  end

  resources :jobs do 
    resources :agencies
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/jobs' => 'jobs#index'
  get '/agencies' => 'agencies#index'
end
