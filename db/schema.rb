# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_11_09_202223) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "badges", force: :cascade do |t|
    t.string "badge_id"
    t.string "name"
    t.string "description"
    t.string "image_url"
    t.string "owner"
    t.string "skills"
    t.bigint "champion_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["badge_id"], name: "index_badges_on_badge_id"
    t.index ["champion_id"], name: "index_badges_on_champion_id"
    t.index ["name"], name: "index_badges_on_name"
  end

  create_table "champions", force: :cascade do |t|
    t.string "name"
    t.string "tags"
    t.string "title"
    t.string "blurb"
    t.string "info"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name"], name: "index_champions_on_name"
    t.index ["tags"], name: "index_champions_on_tags"
  end

  add_foreign_key "badges", "champions"
end
