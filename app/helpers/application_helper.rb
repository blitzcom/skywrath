module ApplicationHelper
  def field_has_error?(resource, key)
    if resource.nil? || resource.errors.nil?
      return false
    end

    unless resource.errors.key?(key)
      return false
    end

    resource.errors[key].any?
  end

  def field_error_message(resource, key, tag, options = nil)
    if field_has_error?(resource, key)
      content_tag tag, resource.errors[key].first, options
    end
  end

  def field_error(resource, key)
    return "error" if field_has_error?(resource, key)
  end

  def normalize_flash(key)
    if key.nil?
      return "info"
    end

    if key.is_a?(String)
      key = key.to_sym
    elsif !key.is_a?(Symbol)
      return "info"
    end

    case key
    when :notice
      return "success"
    when :success
      return "success"
    when :alert
      return "error"
    when :error
      return "error"
    end
  end
end
