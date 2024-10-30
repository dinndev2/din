
class Api::V1::BaseController < ApplicationController
# Any common logic for Api::V1 controllers can go here
  def download_cv
    cv_path = Rails.root.join('app', 'assets', 'files', 'me.pdf')
    send_file cv_path, filename: 'aladin_cv.pdf', type: 'application/pdf', disposition: 'attachment'
  end
end
  
 