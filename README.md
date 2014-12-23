# simplecov-html-hackish-inline-assets

How to use:
1. make sure gem `sprockets` is installed (already the case for rails apps)
2. add this fork to your `Gemfile`, next to `simplecov`. Because it uses
  the same name, it will replace the dependency for `simplecov` and "just work"
  due to the awesome power of `bundler`s dependency management:

  ```ruby
  gem 'simplecov-html', git: 'https://github.com/eins78/simplecov-html.git'
  ```
3. Active inlining of assets with `export SIMPLECOV_INLINE_ASSETS=1` (only then `sprockets` is actually used)

---

Default HTML formatter for SimpleCov
====================================

***Note: To learn more about SimpleCov, check out the main repo at https://github.com/colszowka/simplecov***

Generates a nice HTML report of your SimpleCov ruby code coverage results on Ruby 1.9 using client-side Javascript
quite extensively.


Note on Patches/Pull Requests
-----------------------------

The formatter itself has no actual tests. Instead, it is tested in the cucumber features of simplecov itself. If you
modify the formatter, please make sure the simplecov test suites still pass by doing the following:

  * Clone simplecov into the parent directory of your simplecov-html checkout
  * `cd` there, run `bundle`
  * You should end up with all dev dependencies installed and simplecov-html being used from your disk
  * Run the tests (units and features)
  
Please remember to add tests if you add functionality.

**Important:** If you modify the JS/CSS assets, you'll have to precompile them using `rake assets:compile` - otherwise,
your changes will not be included in your coverage reports.


Copyright
---------

Copyright (c) 2010-2013 Christoph Olszowka. See LICENSE for details.
