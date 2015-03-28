json.id @user.id
json.email @user.email
json.tasks @user.tasks do |t|
  json.id t.id
  json.text t.text
  json.done t.done
  json.url user_task_url(@user, t, format: :json)
end
json.created_at @user.created_at
json.updated_at @user.updated_at
