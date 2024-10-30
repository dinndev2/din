class SettingList < ApplicationRecord
  belongs_to :settingsable, polymorphic: true, optional: true
end
