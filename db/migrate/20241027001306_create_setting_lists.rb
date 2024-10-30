class CreateSettingLists < ActiveRecord::Migration[7.2]
  def change
    create_table :setting_lists do |t|
      t.integer :order
      t.references :settingsable, polymorphic: true
      t.string :settings_type

      t.timestamps
    end
  end
end
