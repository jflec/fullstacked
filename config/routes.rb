Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'champions/index'
      get 'champions/show'
      get 'badges/index', to: "champions#show"
      
    end
  end
  root 'pages#index'
end
