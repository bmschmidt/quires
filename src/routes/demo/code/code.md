---
title: Code and classes
author: Ben Schmidt
...

# Custom behavior for classes.

One key element of quires is that they allow you to provide 
custom behavior on top of *codeblocks*, specifically.

:::code

This code uses class-based selectors to create custom behaviors by language.

:::

All my old R code has `maggritr` style pipes, but new code can use the native
pipe operator! So we'll add click-to-copy for R code blocks, and swap out the old 
style pipes for new ones.  

```R

r_code %>%
   is_made() %>%
   of_pipes() %>%
   that_can() %>%
   wrap_around() %>%
   and_you_just_paste_them_in()

```

Indentation is important to python, so every python block will get buttons to change the indenting.

```python

python = "a language_where "
  "indentation really matters "
  "for copying."

```

Javascript code can be executed straight in the browser: I can't think
of any reason not to do that!

```js

alert('Usage of eval is a bad idea!');

```
