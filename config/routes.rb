Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :notes
      resources :jobs
      resources :setting_lists

      get "download_cv", to: "base#download_cv", as: "download_cv"
    end
  end
end
