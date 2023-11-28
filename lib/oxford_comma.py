def oxford_comma(items):
    item_string = ""
    if len(items) == 1:
        item_string = "".join(items)
        return item_string
    elif len(items) == 2:
        item_string = " and ".join(items)
        return item_string
    else:
        item_string = ", ".join(items[:-1])
        oxford_item_string = f"{item_string}, and {items[-1]}"
        return oxford_item_string

print(oxford_comma(["air", "water", "fire"]))

