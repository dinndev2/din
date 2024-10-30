class CreateJobs < ActiveRecord::Migration[7.2]
  def change
    create_table :jobs do |t|
      t.string :name
      t.text :description
      t.string :link
      t.string :identifier
      t.date :end
      t.date :start
      t.string :made_of, array: true, default: []
      t.code_link :string

      t.timestamps
    end
  end
end
