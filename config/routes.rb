Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  namespace 'api' do
    namespace 'v1' do
      resources :projects
    end
  end

  post '/users/:user_id/projects', to: 'projects#create'
  get '/users/:user_id/projects', to: 'projects#index'
  post '/users/:user_id/projects/:id/add', to: 'projects#add'

  resources :projects

  root to: 'landing#index'

  with_options controller: 'landing' do |landing|
    landing.get '/', action: :index, format: false
    landing.get '/*path', action: :index, format: false
  end
end
