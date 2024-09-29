class CreateNotes < ActiveRecord::Migration[7.2]
  def change
    create_table :notes do |t|
      t.string :description
      t.references :referencable, polymorphic: true

      t.timestamps
    end
  end
end
