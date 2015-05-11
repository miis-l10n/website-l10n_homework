Rails.application.routes.draw do

  scope "(:locale)" do
    root :to => "static_pages#home"
    get 'about' => "static_pages#about"
    get 'about2' => "static_pages#about2"
    get 'about3' => "static_pages#about3"
    get 'about4' => "static_pages#about4"
   # resources :posts
  end
end