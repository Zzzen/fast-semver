#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

use semver::{Version, VersionReq, Error};

#[napi]
fn satisfies(version: String, req: String) -> bool {
  match satisfies_worker(version, req) {
      Ok(true) => true,
      _ => false,
  }
}

fn satisfies_worker(version: String, req: String) -> Result<bool, Error> {
  let req = VersionReq::parse(req. as_str())?;
  Ok(req.matches(&Version::parse(version.as_str())?))
}