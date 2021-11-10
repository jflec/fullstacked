Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'champions/index'
      get 'champions/:id', to: 'champions#show'
    end
  end
  root 'homepage#index'
end
