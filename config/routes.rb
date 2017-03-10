Rails.application.routes.draw do
  resources :cards do
    collection do
      get :random
    end
  end
  root 'home#index'
end
